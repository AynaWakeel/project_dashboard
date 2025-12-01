// import { useState } from "react"

import DashboardLayout from "./dashboard-layout"

function App() {
  // const themes = [
  //   "primary",
  //   "secondary",
  //   "accent"
  // ]
  // const [theme, setTheme] = useState<string>(themes[0])

  return (
    <>

      {/* <div className={`h-screen bg-${theme} `}>
        {themes.map((t) => (
          <>
            <div className="cursor-pointer" onClick={() => setTheme(t)}>
              {t}
            </div>
          </>
        ))}

        <div>
          heading
        </div>
      </div> */}


      <DashboardLayout/>


    </>
  )
}

export default App
