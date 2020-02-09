import React, { useContext, useEffect } from "react";
import ComponentA from "../components/ComponentA";
import { Context, getUser } from '../store'
import { useAction } from "../hooks/useAction";

const Home = () => {
  const {store, dispatch} = useContext(Context);
  const [loading, callGetUser] = useAction(dispatch, getUser);

  useEffect(() => {
    if (!store.userName)
      callGetUser()
  }, [])

  return (
    <div>
      <h1>Hola, { loading ? 'loading...' : store.userName }!</h1>
      <button className="btn btn-success btn-sm" onClick={() => callGetUser()}>Reload user!</button>
      <ComponentA />
      <ComponentA />
      <ComponentA />
    </div>
  );
};

export default Home;
