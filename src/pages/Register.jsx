import { useState } from 'react';

const Register = () => {
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Registration successful!");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-center text-2xl font-bold mb-6">Create an account</h2>
        
        <div className="space-y-4">
          <input 
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text" 
            placeholder="Name" 
          />
          <input 
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text" 
            placeholder="Phone or email" 
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of birth</label>
            <p className="text-gray-500 text-sm mb-2">
              This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
            </p>
            <div className="flex space-x-2">
              <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>Avgust</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Day</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>
              <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Year</option>
                <option>1990</option>
                <option>1991</option>
                <option>1992</option>
                <option>1993</option>
                <option>1994</option>
                <option>1995</option>
                <option>1996</option>
                <option>1997</option>
                <option>1998</option>
                <option>1999</option>
                <option>2000</option>
                <option>2001</option>
                <option>2002</option>
                <option>2003</option>
                <option>2004</option>
                <option>2005</option>
              </select>
            </div>
          </div>
        </div>

        <button 
          className="mt-6 w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
          onClick={handleRegister}
        >
          {loading ? "Loading..." : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Register;