import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Bottomobnav from "../Dashboard_Components/Navigation/bottomobnav";
import Dashtopnav from "../Dashboard_Components/Navigation/dashtopnav";
import Sidebar from "../Dashboard_Components/Navigation/Sidebar";
import Pathcard from "../Dashboard_Components/Cards/Pathcard";
import Areachart from "../Dashboard_Components/Charts/Areachart";
import Barchart from "../Dashboard_Components/Charts/Barchart";
import Linechart from "../Dashboard_Components/Charts/Linechart";
import Piechart from "../Dashboard_Components/Charts/Piechart";
import AuthWrapper from "../LogIn/AuthWrapper";
import { UilEstate, UilBookOpen, UilAward } from "@iconscout/react-unicons";
import AddCocurriculumForm from "../Dashboard_Components/Forms/AddCocurriculumForm";
import { getCocurrData } from "../../api/cocurrReq";
import { useQuery } from "react-query";
import { deleteCocurr } from "../../api/cocurrReq";
import { useWindowSize } from "../../utils/useWindowSise";
import Progresswrapper from "../Dashboard_Components/Progressbars/Progresswrapper";
import { getLearningPaths, updateLearningPath } from "../../api/learnPReq";

const Student_Home = ({ studentId, setSelected }) => {
  const lpQuery = useQuery(['learnpath', studentId], () => getLearningPaths(studentId));
  return (
    <div className="w-full overflow-y-auto">
      <h1 className="w-full text-center text-3xl">THIS IS HOME PAGE</h1>
      <div className="-col w-full">
        <div className="flex w-full">
          {
            lpQuery.isFetching ?
            <h1 className="w-full text-center text-3xl">LOADING PATHS...</h1>
            :
            <>
            {
              lpQuery.data.learningPath.map((path) => {
                return (
                  <div className="cursor-pointer" onClick={()=>{ setSelected(2) }}>
                    <Pathcard completion={path.score * 100} title={path.classroomId.subject}/>
                  </div>
                )
              })
            }
            </>
          }
        </div>
        <div className="flex w-full justify-center">
          {
            lpQuery.isFetching ?
            <h1 className="w-full text-center text-3xl">LOADING GRAPHS...</h1>
            :
            <>
            <Barchart
              labels={lpQuery.data.learningPath.map(path => { return path.classroomId.subject} )}
              dataset={[lpQuery.data.learningPath.map(path => { return (path.score * 100)} )]}
              datasetLabels={["Learning Path Score"]}
              colors={[
                ["rgb(230,206,247)", "rgb(247,15,225)"]
              ]}
            />
            <Areachart
              labels={lpQuery.data.learningPath.map(path => { return path.classroomId.subject} )}
              dataset={[lpQuery.data.learningPath.map(path => { return (path.score * 100)} )]}
              datasetLabels={["Learning Path Score"]}
              colors={[
                ["rgb(230,206,247)", "rgb(247,15,225)"]
              ]}
            />
            <Linechart
              labels={lpQuery.data.learningPath.map(path => { return path.classroomId.subject} )}
              dataset={[lpQuery.data.learningPath.map(path => { return (path.score * 100)} )]}
              datasetLabels={["Learning Path Score"]}
              colors={[
                ["rgb(230,206,247)", "rgb(247,15,225)"]
              ]}
            />
            </>
          }
          {/* <Piechart
            labels={["Games", "Dance", "Art", "WE"]}
            dataset={[[20, 40, 10, 30]]}
            colors={[
              ["rgb(230,206,247)", "rgb(247,15,225)", "#b0d980", "#83de14"],
            ]}
          /> */}
        </div>
      </div>
    </div>
  )
}

const Student_LearnPath = ({ studentId }) => {
  const lpQuery = useQuery(['learnpath', studentId], () => getLearningPaths(studentId));
  const handleUpdate = async (idx) => {
    console.log(lpQuery.data.learningPath[idx]);
    const resData = await updateLearningPath(lpQuery.data.learningPath[idx]);
    if(resData.error) 
    {
      window.alert(resData.error);
    }
  }
  return (
    <div className="w-full overflow-y-auto">
      <h1 className="w-full text-center text-3xl">THIS IS LEARNING PATHS PAGE</h1>
      {
        lpQuery.isFetching ?
        <h1 className="w-full text-center text-3xl">LOADING PATHS...</h1>
        :
        <div className="flex w-full">
          {console.log(lpQuery.data)}
          {
            lpQuery.data.learningPath.map((path, i) => {
              return (
                <div className="w-full m-auto shadow:lg rounded-xl" key={i}>
                  <h1>Path Name: {path.classroomId.subject}</h1>
                  <Progresswrapper
                    type="linear"
                    progressVal={path.score * 100}
                    time={50}
                    strokeSize={20}
                    containerSize={100}
                    fontSize={16}
                    color="green"
                  />
                  <>
                  {
                    path.learningOutcomes.map((lo, j) => {
                      return (
                        <div key={j}>
                          <label htmlFor={lo.name}>{lo.name}</label>
                          <input 
                            type="checkbox" 
                            id={lo.name} 
                            defaultChecked={lo.isDone} 
                            disabled={lo.isDone}
                            onChange={(e) => {
                              lpQuery.data.learningPath[i].learningOutcomes[j].isDone = e.target.checked; // true or false
                            }}
                          />
                        </div>
                      )
                    })
                  }
                  </>
                  <button onClick={() => handleUpdate(i)} >SUBMIT</button>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

const Student_CocurrCard = ({ data, delCocurr }) => {
  return (
    <div className="flex w-full max-w-xl flex-col mx-auto my-10 rounded-xl shadow-lg">
      <h1><b>Name:</b> {data.name}</h1>
      <h1><b>Description:</b> </h1>
      <p>{data.description}</p>
      <button onClick={() => { delCocurr(data.name, data.studentId) } }>Delete</button>
    </div>
  )
}

const Student_Cocurricular = ({ studentId }) => {
  // console.log('In student cocurricular');
  // console.log(studentId);
  const cocurrQuery = useQuery(['cocurr', studentId], () => getCocurrData(studentId));
  const delCocurr = async (name, studentId) => {
    const resData = await deleteCocurr({ 
      name: name, 
      studentId: studentId
    });
    if(resData.error) 
    {
      window.alert(resData.error);
    }
    else
    {
      window.alert('Cocurricular Activity Deleted!')
    }
  }
  return (
    <div className="w-full overflow-y-auto flex-col justify-center items-center">
      <h1 className="w-full text-center text-3xl">THIS IS CO CURRICULAR PAGE</h1>
      <AddCocurriculumForm studentId={studentId} />
      {
        cocurrQuery.isFetching ?
        <h1 className="w-full text-center text-3xl">LOADING... </h1>
        :
        <>
        <h1 className="flex w-full max-w-xl flex-col mx-auto my-10">
          <b>Number of cocurricular activities: {cocurrQuery.data.total}</b>
        </h1>
        {
          cocurrQuery.data.data.map((cocurr, idx) => {
            return (
              <Student_CocurrCard key={idx} data={cocurr} delCocurr={delCocurr} />
            )
          })
        }
        </>
      }
    </div>
  )
}

const Student_D_Inner = ({ currUser }) => {
  if(currUser.userType !== 'Student') window.location.assign("/"+currUser.userType+"_D")
  const studentMenuList = [
    {
      id: 1,
      title: "Home",
      icon: <UilEstate />,
      iconclass: "uil uil-estate"
    },
    {
      id: 2,
      title: "LearningPaths",
      icon: <UilBookOpen />,
      iconclass: "uil uil-book-open"
    },
    {
      id: 3,
      title: "CoCurriculars",
      icon: <UilAward />,
      iconclass: "uil uil-award"
    }
  ];
  const [selected, setSelected] = useState(1);
  const size = useWindowSize();
  return (
    <div className="flex">
        {/* <Dashtopnav />
          <Bottomobnav /> */}
        {
          size.width >= 600 ?
          <Sidebar 
            menuList={studentMenuList} 
            username={currUser.userInfo.name} 
            userType={currUser.userType} 
            selected={selected}
            setSelected={setSelected}
          />
          :
          <Dashtopnav />
        }
        {
          (selected === 1) && <Student_Home studentId={currUser._id} setSelected={setSelected}/>
        }
        {
          (selected===2) && <Student_LearnPath studentId={currUser._id} />
        }
        {
          (selected===3) && <Student_Cocurricular studentId={currUser._id} />
        }
        {
          size.width >=600 ?
          <></>
          :
          <Bottomobnav menuList={studentMenuList} menuOption={selected} setMenuOption={setSelected} />
        }
    </div>
  );
}

const Student_D = () => {
  return (
    <AuthWrapper>
      <Student_D_Inner />
    </AuthWrapper>
  )
}

export default Student_D;
