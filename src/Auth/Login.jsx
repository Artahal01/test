import { useState } from 'react';
import './Login.css';

const Login = () => {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setLogin(prev => {
            return {...prev, [e.target.name] : e.target.value}
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(login);
    }

    return (
        <div className='w-[100vw] h-[100vh] grid place-items-center'>
            <div className='login_cover w-[80%] h-[90%] overflow-hidden bg-blue-800 rounded-2xl shadow-md flex justify-center items-center'>
                <div className='flex-[.4] relative z-20 h-full flex items-center justify-center'>
                    <div className='p-8 w-full h-full'>
                        <div className='w-full h-full rounded-2xl bg-blue-400 shadow p-4 flex flex-col gap-4 items-center justify-center'>
                            <div className='font-blackOpsOne text-6xl text-slate-800'>VAIKA</div>
                            <div className='w-full flex items-center justify-center gap-2 px-16'>
                                <div className='h-[2px] bg-slate-800 bg-opacity-50 flex-1'></div>
                                <div className='text-xs'>Se connecter</div>
                                <div className='h-[2px] bg-slate-800 bg-opacity-50 flex-1'></div>
                            </div>
                            <form onSubmit={(e) => handleSubmit(e)} className='w-full px-16 flex flex-col gap-2'>
                                <div className='w-full flex flex-col gap-2'>
                                    <label htmlFor="email" className='text-sm text-slate-800'>Adresse mail</label>
                                    <input type="email" required className='rounded-md h-8 outline-none px-2' name="email" onChange={(e) => handleChange(e)} />
                                </div>
                                <div className='w-full flex flex-col gap-2'>
                                    <label htmlFor="password" className='text-sm text-slate-800'>Mot de passe</label>
                                    <input type="password" required className='rounded-md h-8 outline-none px-2' name="password" onChange={(e) => handleChange(e)} />
                                </div>
                                <div className='flex justify-center items-center my-2'>
                                    <button type='submit' className='rounded-md bg-blue-500 text-white px-4 py-2 hover:shadow-md'>Se connecter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex-[.6] h-full'>+</div>
            </div>
        </div>
    )
}

export default Login