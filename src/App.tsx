import React from 'react'
import { Layout, LayoutItem } from './layout'
import './App.css'

function App() {
  return (
    <div>
      <div
        style={{
          textAlign: 'center',
        }}
      >
        Columns: 12
      </div>
      <Layout
        horizontalAlign="center"
        verticalAlign="center"
        horizontalSpacing={30}
        verticalSpacing={50}
        columns={12}
      >
        <LayoutItem size={{ default: 4 }}>
          <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            default: 4
          </div>
        </LayoutItem>
        <LayoutItem size={{ default: 4 }}>
          <div className="bg-orange-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            default: 4
          </div>
        </LayoutItem>
        <LayoutItem size={{ default: 4 }}>
          <div className="bg-yellow-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            default: 4
          </div>
        </LayoutItem>
      </Layout>

      <hr
        style={{
          marginTop: 50,
        }}
      />

      <div
        style={{
          textAlign: 'center',
        }}
      >
        Columns: 100
      </div>
      <Layout
        horizontalAlign="center"
        verticalAlign="center"
        horizontalSpacing={30}
        verticalSpacing={50}
        columns={100}
      >
        <LayoutItem size={{ default: 100 }}>
          <div className="bg-green-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            default: 100
          </div>
        </LayoutItem>
        <LayoutItem size={{ default: 30 }}>
          <div className="bg-teal-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            default: 30
          </div>
        </LayoutItem>
        <LayoutItem size={{ default: 30 }}>
          <div className="bg-blue-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            default: 30
          </div>
        </LayoutItem>
        <LayoutItem size={{ default: 40 }}>
          <div className="bg-indigo-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            default: 40
          </div>
        </LayoutItem>
        <LayoutItem size={{ default: 20 }}>
          <div className="bg-purple-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            default: 20
          </div>
        </LayoutItem>
        <LayoutItem size={{ default: 55 }}>
          <div className="bg-pink-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            default: 55
          </div>
        </LayoutItem>
        <LayoutItem size={{ default: 25 }}>
          <div className="bg-slate-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            default: 25
          </div>
        </LayoutItem>
        <LayoutItem size={{ default: 80 }}>
          <div className="border-black border-2 min-h-[50px] text-center p-3">
            default: 80
          </div>
        </LayoutItem>
        <LayoutItem size={{ default: 20 }}>
          <div className="border-black border-2 min-h-[50px] text-center p-3">
            default: 20
          </div>
        </LayoutItem>
      </Layout>
    </div>
  )
}

export default App
