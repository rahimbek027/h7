 import { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
  const Login = () => { const [loading, setLoading] = useState(false); 
    const [error, setError] = useState('');
     const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
       const navigate = useNavigate(); const handleLogin = () => { if (!username || !password)
         { setError('Iltimos, foydalanuvchi nomi va parolni kiriting.');
           return; 
          } setError(''); setLoading(true); 
         setTimeout(() => { setLoading(false); 
          if (username === "user" && password === "pass") { alert("Kirish muvaffaqiyatli!");
             navigate('/profile');
        } else { setError("Noto'g'ri foydalanuvchi nomi yoki parol.");

         } }, 2000); }; 
         return ( <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
           <div className="w-full max-w-md bg-white p-8 shadow-md rounded">
             <img className="w-8 h-8 mx-auto mb-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-h-e2hgz8mwGfCt4gvj4IgMG_wAUolVM6w&s" alt="Twitter" /> 
             <h2 className="text-center text-2xl font-bold mb-4">Twitter'ga kirish</h2> {error && <div className="text-red-500 mb-4">{error}</div>}
              <input className="mt-2 p-2 w-full border rounded" type="text" placeholder="Telefon, elektron pochta yoki foydalanuvchi nomi" value={username} onChange={(e) => setUsername(e.target.value)} aria-label="Telefon, elektron pochta yoki foydalanuvchi nomi" /> 
              <input className="mt-2 p-2 w-full border rounded" type="password" placeholder="Parol" value={password} onChange={(e) => setPassword(e.target.value)} aria-label="Parol" /> <button className="mt-4 p-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleLogin} > {loading ? "Yuklanmoqda..." : "Kirish"} </button> </div> </div> ); }; export default Login;