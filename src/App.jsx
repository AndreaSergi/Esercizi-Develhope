

import { Clock } from "./Clock";
import { Colors } from "./Colors";
import { FocusableInput } from "./FocusableInput";
import { Helloworld } from "./Helloworld";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";
import { Todolist } from "./Todolist";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";
import { GithubUser } from "./GithubUser";
import { GithubUsers } from "./GithubUsers";
import { CounterComponent } from "./CounterComponent";
import { ControlledFormHook2 } from "./ControlledFormHook2";
import { UserApi } from "./UserApi";
import { UseApi2 } from "./UseApi2";
import { AlertClock } from "./AlertClock";

export function App(){

//funzione da passare a login come prop
  function handleLogin(data) {
    console.log("i dati passati dalla funzione prop sono:", data)
  }


  function handleButtonTime(){
    const now = new Date()
    alert(`The current time is: ${now.toLocaleDateString()}`)

}


  //array di colori
  const colors = [
    {id:1, name:"blue"},
    {id:2, name:"red"},
    {id:3, name:"pink"},
    {id:4, name:"violet"},
  ]

  const [language, setLanguage] = useState('en')

  function handleLanguage(e){
    setLanguage(e.target.value)
  }


  return (
    <div>

      

      {/* <AlertClock />
      <InteractiveWelcome /> */}

      {/* <Login onLogin={handleLogin} />
      <Color colors={colors} /> */}

      {/* <UncontrolledLogin onLogin={handleLogin} />

      <FocusableInput /> */}


      <AlertClock handleButtonTime={handleButtonTime} />
      
      <LanguageContext.Provider value={language}>

        <Container title={<h2>Titolo Container</h2>}>
          <Welcome name={"Andrea"} />
          <Todolist />
        </Container>


        <hr/>

        <select onChange={handleLanguage} name="language" id="language">
          <option value="en">inglese</option>
          <option value="it">italiano</option>
        </select>
        <Clock/>

      </LanguageContext.Provider>

      <p>GITHUBUSER</p>
      <GithubUser username='andreasergi'/>
      {/* <p>Githubusers</p>
      <GithubUsers username='andreasergi' /> */}

      <CounterComponent />
      <hr />
      <ControlledFormHook2 />


      <Colors colors = {colors} />
      {/* <UseApi2/> */}
    </div>
  )
}
