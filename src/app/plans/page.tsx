export default function Plan() {
    const plans = [
      { id: 1, tenure: '1 Months', amount: '1,000/-' },
      { id: 2, tenure: '3 Months', amount: '2,500/-' },
      { id: 3, tenure: '6 Months', amount: '4,500/-' },
    ];
  
    const plansforgirls = [
      
      { id: 1, tenure: '1 Months', amount: '800/-' },
      { id: 2, tenure: '3 Months', amount: '1,900/-' },
      { id: 3, tenure: '6 Months', amount: '3,300/-' },
    ];
  
    return (
      <div className="bg-white text-black p-8 flex flex-col items-center">
        <h1 className="text-blue-800 font-bold text-center text-3xl mb-4">Choose Your Plan</h1>
        <p className="text-blue-700 font-light text-center mb-6 text-lg shadow-md shadow-amber-200">
          Best Plans For <span className="text-blue-900 font-bold">Gym Members</span>
        </p>
  
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl gap-8">
          <div className="w-full md:w-3/4 flex flex-col gap-6">
            <div className="flex flex-col justify-center shadow-lg shadow-gray-300">
              <div>
                <h1 className="text-red-950 font-bold text-xl md:text-2xl">GYM CARDIO CROSSFIT :</h1>
              </div>
              <table className="w-full max-w-4xl text-center border border-gray-300 shadow-md">
                <thead className="bg-red-950 text-white">
                  <tr>
                    {plans.map((plan) => (
                      <th key={plan.id} className="p-2 text-lg">{plan.tenure}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {plans.map((plan) => (
                      <td key={plan.id} className="p-2 border border-gray-300">{plan.amount}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
  
            <div className="flex flex-col justify-center">
              <div>
                <h1 className="text-red-950 font-bold text-xl md:text-2xl">FOR FEMALE :</h1>
              </div>
              <table className="w-full max-w-4xl text-center border border-gray-300 shadow-lg shadow-gray-300">
                <thead className="bg-red-950 text-white">
                  <tr>
                    {plansforgirls.map((plan) => (
                      <th key={plan.id} className="p-2 text-lg">{plan.tenure}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {plansforgirls.map((plan) => (
                      <td key={plan.id} className="p-2 border border-gray-300">{plan.amount}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  
          <div className="shadow-lg shadow-gray-400 p-4 flex flex-col justify-center items-center text-center w-full md:w-1/4 min-h-[250px]">
            <h1 className="text-red-800 font-bold text-2xl">GYM OPENING TIME</h1>
            <p className="text-orange-700 font-light">MONDAY <span className="text-red-900 font-bold">TO</span> SATURDAY</p>
            <p className="text-black font-bold">SUNDAY <span className="text-red-500 font-bold">CLOSE</span></p>
            
            <div className="flex flex-col justify-center items-center mt-5 font-bold space-y-2">
              <div className="flex space-x-4">
                <p>MORNING</p>
                <p>5 AM <span className="text-red-900 font-bold">TO</span> 10 AM</p>
              </div>
              <div className="flex space-x-4">
                <p>EVENING</p>
                <p>4 PM <span className="text-red-900 font-bold">TO</span> 10 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  