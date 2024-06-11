import { useState } from 'react'

import './App.css'
import { Title } from './assets/components/Title/Title'
import { BackToHome } from './assets/components/backToHome/BackToHome'
import { FreshPage } from './assets/components/freshPage/Freshpage'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { AllProjects } from './assets/components/allProjects/AllProjects'
import { Upload } from './assets/components/allProjects/Upload'
import { Edit } from './assets/components/edit/Edit'
import { Sidebar } from './assets/components/sidebar/Sidebar'
import { Widget } from './assets/components/widget/Widget'
import { Settings } from './assets/components/Settings/Settings'

function App() {
  function UploadWithProjectId() {
    const { projectId } = useParams(); // Access projectId from route params

    return <Upload projectId={projectId} />;
}
function EditWithProjectId() {
  const {index, projectId } = useParams(); 

  return <Edit projectId={projectId} index={index} />;
}
const MainLayout = ({ children }) => {
  return (
      <>
          <Title />
          <BackToHome />
          <div>{children}</div>
      </>
  );
};

const EditLayout = ({ children }) => {
    const {index, projectId } = useParams(); 
    console.log("in edit layout",index,projectId)
  return (
      <div style={{"display":"flex"}}>
         

          <Sidebar projectId={projectId} index={index} />
         

          <div>{children}</div>
      </div>
  );
};
const UploadLayout = ({ children }) => {
    const {index, projectId } = useParams(); 
    console.log("in edit layout",index,projectId)
  return (
      <div style={{"display":"flex",justifyContent:"flex-end",alignItems:"start"}}>
         
         <div style={{
            position:"relative",
            "left":"-125px",
          
            
         }}>

          <Sidebar projectId={projectId} index={index} />
         </div>

          <div>{children}</div>
      </div>
  );
};
 

return (
  <BrowserRouter>
      <Routes>
          <Route path='/' element={
              <MainLayout>
                  <FreshPage />
              </MainLayout>
          } />
          <Route path='/projects' element={
              <MainLayout>
                  <AllProjects />
              </MainLayout>
          } />
          <Route path='/projects/:projectId/upload' element={
              <UploadLayout>
                  <UploadWithProjectId />
              </UploadLayout>
          } />
          <Route path='/projects/:projectId/:index/edit' element={
              <EditLayout>
                  <EditWithProjectId />
              </EditLayout>
          } />
          <Route path='/projects/:projectId/:index/widget' element={
           <EditLayout>
           <Widget />
       </EditLayout>
          }/>
          <Route path='/settings' element={
            < div  style={{"display":"flex"}}>
              <Sidebar/>
            <Settings />
            </div>
          
         
          }
          />
      </Routes>
  </BrowserRouter>
);
  
}

export default App
