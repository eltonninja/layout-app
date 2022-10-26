import React from 'react'
import { Layout, LayoutItem } from './layout'
import './App.css'

function App() {
  return (
    <div>
      <Layout
        horizontalAlign="center"
        verticalAlign="center"
        horizontalSpacing={30}
        verticalSpacing={50}
        columns={12}
      >
        <LayoutItem size={{ default: 4 }}>
          <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
        <LayoutItem size={{ default: 4 }}>
          <div className="bg-orange-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
        <LayoutItem size={{ default: 4 }}>
          <div className="bg-yellow-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
      </Layout>

      <Layout
        horizontalAlign="center"
        verticalAlign="center"
        horizontalSpacing={30}
        verticalSpacing={50}
        columns={12}
      >
        <LayoutItem size={{ default: 12 }}>
          <div className="bg-green-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
        <LayoutItem size={{ default: 3 }}>
          <div className="bg-teal-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
        <LayoutItem size={{ default: 3 }}>
          <div className="bg-blue-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
        <LayoutItem size={{ default: 3 }}>
          <div className="bg-indigo-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
        <LayoutItem size={{ default: 3 }}>
          <div className="bg-purple-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
        <LayoutItem size={{ default: 12 }}>
          <div className="bg-pink-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
        <LayoutItem size={{ default: 6 }}>
          <div className="bg-slate-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
        <LayoutItem size={{ default: 6 }}>
          <div className="border-black border-2 min-h-[50px]">
            <p>Testing</p>
          </div>
        </LayoutItem>
      </Layout>
    </div>
  )
}

export default App
