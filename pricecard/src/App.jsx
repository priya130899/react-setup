import React from "react"
import Card from "./components/Card"
function App() {
  const data = [
    {
      plan:"FREE",
      price:"0",
      user:"Single User",
      isUser:true,
      storage:"5 GB Storage",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      ispublicProjects:true,
      communityAccess:"Community Access",
      iscommunity:true,
      privateProjects:"Unlimited private projects",
      isprivateProjects:false,
      support:"Dedicated Phone Support",
      issupport:false,
      subDomain:"Free subdomain",
      issubDomain:false,
      reports:"Monthly status reports",
      isreports:false
    },
    {
      plan:"PLUS",
      price:"9",
      user:"Multiple User",
      isUser:true,
      storage:"50 GB Storage",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      ispublicProjects:true,
      communityAccess:"Community Access",
      iscommunity:true,
      privateProjects:"Unlimited private projects",
      isprivateProjects:true,
      support:"Dedicated Phone Support",
      issupport:true,
      subDomain:"Free subdomain",
      issubDomain:true,
      reports:"Monthly status reports",
      isreports:false
    },
    {
      plan:"PRO",
      price:"49",
      user:"Unlimited Users",
      isUser:true,
      storage:"150 GB Storage",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      ispublicProjects:true,
      communityAccess:"Community Access",
      iscommunity:true,
      privateProjects:"Unlimited private projects",
      isprivateProjects:true,
      support:"Dedicated Phone Support",
      issupport:true,
      subDomain:"Free subdomain",
      issubDomain:true,
      reports:"Monthly status reports",
      isreports:true
    }
  ]
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              data.map((e,i)=>{
                return <Card data = {e} key={i}/>
              })
            }

          </div>
        </div>
      </section>
    </>
  )
}

export default App
