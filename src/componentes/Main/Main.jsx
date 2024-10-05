// import '/Users/mica/Desarrollo Web & Mobile/redditapp/src/components/index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Main() {

    return(
        <>
            {navigate && <Navigate to="/main" />} 
            {/* {! navigate &&  */}
                <container className="p-3 my-5 d-flex flex-column w-50">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0  ml-3"  style={{ color: 'black' }}>User</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <input id="full-name" name="fullName" style={{ backgroundColor: '#fff' }} type="text"  className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0  ml-3" style={{ color: 'black' }} >Password</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <input className="form-control" label='Password' style={{ backgroundColor: '#fff' }} id='form2' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="text-right col-sm-12">
                                <button style={{ marginTop: '10px', fontSize: '14px', background: 'none', border: 'none', color: 'blue', cursor: 'pointer'}}  
                                 >
                                    ¿Olvidaste tu contraseña?
                                </button>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="d-flex justify-content-center col-sm-12">
                                <button className="signin ml-12" type="submit">Sign in</button>
                            </div>
                        </div>
                    </form>
            </container>
            {/* }  */}
        </>
        
    );
    
  }
 
  export default Main;
  
