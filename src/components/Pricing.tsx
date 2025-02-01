import React from 'react'

export default function Pricing() {
  return (
    
    <section id='pricing'>
    <div className="bg-black  text-white container mx-auto p-10 overflow-x-auto ">
      <table className="w-full rounded-lg shadow-lg border-separate border-spacing-4">
        <caption className="sr-only">Pricing plan comparison</caption>
        <thead>
          <tr className="text-lg font-semibold text-gray-800">
            <th></th>
            <th scope="col" className="transform transition-all hover:scale-105 hover:bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-xl">
              <h2 className="px-2 text-lg font-medium">Starter</h2>
              <p className="mb-3">
                <span className="text-2xl font-bold sm:text-4xl">1000 Rs</span>
               
              </p>
            </th>
            <th scope="col" className="transform transition-all hover:scale-105 hover:bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-xl">
              <h2 className="px-2 text-lg font-medium">Standard</h2>
              <p className="mb-3">
                <span className="text-2xl font-bold sm:text-4xl">1999 Rs</span>
                
              </p>
            </th>
            <th scope="col" className="transform transition-all hover:scale-105 hover:bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-xl">
              <h2 className="px-2 text-lg font-medium">Premium</h2>
              <p className="mb-3">
                <span className="text-2xl font-bold sm:text-4xl">4999 Rs</span>
              
              </p>
            </th>
          </tr>
        </thead>
        <tbody className="space-y-6 text-center divide-y">
          <tr className="transition-all hover:bg-gray-50  hover:text-black rounded-lg p-4 shadow-sm hover:shadow-xl">
            <th scope="row" className="text-left hover:text-black">
              <h3 className="py-3">Consultation Hours</h3>
            </th>
            <td className="py-3">
              <span className="block text-sm hover:text-black">5 hours</span>
            </td>
            <td className="py-3">
              <span className="block text-sm hover:text-black">20 hours</span>
            </td>
            <td className="py-3">
              <span className="block text-sm">50 hours</span>
            </td>
          </tr>
          <tr className="transition-all hover:text-black hover:bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-xl">
            <th scope="row" className="text-left">
              <h3 className="py-3">Project Assistance</h3>
            </th>
            <td className="py-3">
              <span className="block text-sm">1 project</span>
            </td>
            <td className="py-3">
              <span className="block text-sm">5 projects</span>
            </td>
            <td className="py-3">
              <span className="block text-sm">Unlimited projects</span>
            </td>
          </tr>
          <tr className="hover:text-black transition-all hover:bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-xl">
            <th scope="row" className="text-left">
              <h3 className="py-3">Strategy Development</h3>
            </th>
            <td className="py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Starter plan" className="w-5 h-5 mx-auto text-violet-600 transition-all hover:scale-125">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </td>
            <td className="py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Standard plan" className="w-5 h-5 mx-auto text-violet-600 transition-all hover:scale-125">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </td>
            <td className="py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto text-violet-600 transition-all hover:scale-125">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </td>
          </tr>
          <tr className="hover:text-black transition-all hover:bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-xl">
            <th scope="row" className="text-left">
              <h3 className="py-3">Advanced Solutions</h3>
            </th>
            <td className="py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Starter plan" className="w-5 h-5 mx-auto text-violet-600 transition-all hover:scale-125">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </td>
            <td className="py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Standard plan" className="w-5 h-5 mx-auto text-violet-600 transition-all hover:scale-125">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </td>
            <td className="py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto text-violet-600 transition-all hover:scale-125">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  

  )
}
