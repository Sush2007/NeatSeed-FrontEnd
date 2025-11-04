import React from 'react'

const Works = () => {
  return (
    <>
     <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
        <p className="text-gray-600 mt-2">Streamlined waste management in three simple steps</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4">
              <span className="text-green-600 font-bold">01</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Setup Routes</h3>
            <p className="text-gray-600 mt-2">Define collection routes and assign houses to optimize coverage.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4">
              <span className="text-green-600 font-bold">02</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Deploy Trucks</h3>
            <p className="text-gray-600 mt-2">Assign trucks to routes and monitor real-time progress.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4">
              <span className="text-green-600 font-bold">03</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Monitor & Optimize</h3>
            <p className="text-gray-600 mt-2">Track performance and continuously improve efficiency.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Works