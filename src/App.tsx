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
        Columns: 100, HorizontalSpacing: 50, VerticalSpacing: 50
      </div>
      <Layout
        horizontalAlign="start"
        verticalAlign="center"
        horizontalSpacing={50}
        verticalSpacing={50}
        columns={100}
        breakpoints={{
          sm: 375,
          md: 768,
          lg: 1024,
          xl: 1440,
          xxl: 1920,
        }}
      >
        <LayoutItem size={{ default: 50, sm: 100, lg: 50, xl: 20 }}>
          <div className="bg-green-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            sm: 100
          </div>
        </LayoutItem>
        <LayoutItem size={{ default: 50, sm: 30, lg: 25, xl: 20 }}>
          <div className="bg-teal-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            sm: 30
          </div>
        </LayoutItem>
        <LayoutItem size={{ sm: 30, lg: 25, xl: 20 }}>
          <div className="bg-blue-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            sm: 30
          </div>
        </LayoutItem>
        <LayoutItem size={{ sm: 40, xl: 20 }}>
          <div className="bg-indigo-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            sm: 40
          </div>
        </LayoutItem>
        <LayoutItem size={{ sm: 20, xl: 20 }}>
          <div className="bg-purple-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            sm: 20
          </div>
        </LayoutItem>
        <LayoutItem size={{ sm: 55 }}>
          <div className="bg-pink-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            sm: 55
          </div>
        </LayoutItem>
        <LayoutItem size={{ sm: 25 }}>
          <div className="bg-slate-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            sm: 25
          </div>
        </LayoutItem>
        <LayoutItem size={{ sm: 100, md: 80 }}>
          <div className="border-black border-2 min-h-[50px] text-center p-3">
            md: 80
          </div>
        </LayoutItem>
        <LayoutItem size={{ sm: 100, md: 20 }}>
          <div className="border-black border-2 min-h-[50px] text-center p-3">
            md: 20
          </div>
        </LayoutItem>
      </Layout>
    </div>
  )
}

export default App
