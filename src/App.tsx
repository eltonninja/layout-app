import React, { useState } from 'react'
import { Layout, LayoutItem } from './layout'
import './App.css'

function App() {
  const [changeable, setChangeable] = useState(false)

  const [columns, setColumns] = useState(100)
  const [horizontalSpacing, setHorizontalSpacing] = useState(50)
  const [verticalSpacing, setVerticalSpacing] = useState(30)
  const [horizontalAlign, setHorizontalAlign] = useState('start')
  const [verticalAlign, setVerticalAlign] = useState('start')

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          right: 10,
          bottom: 10,
        }}
      >
        <label>
          Enable Modify:
          <input
            type="checkbox"
            checked={changeable}
            onChange={(e) => setChangeable(e.target.checked)}
            className="ml-3"
          />
        </label>
      </div>
      <div style={{ display: changeable ? 'block' : 'none' }}>
        <label className="block m-3">
          Columns:
          <input
            type="number"
            value={columns}
            onChange={(e: any) => setColumns(e.target.value)}
            className="bg-gray-300 ml-3"
          ></input>
        </label>
        <label className="block m-3">
          HorizontalSpacing:
          <input
            type="number"
            value={horizontalSpacing}
            onChange={(e: any) => setHorizontalSpacing(e.target.value)}
            className="bg-gray-300 ml-3"
          ></input>
        </label>
        <label className="block m-3">
          VerticalSpacing:
          <input
            type="number"
            value={verticalSpacing}
            onChange={(e: any) => setVerticalSpacing(e.target.value)}
            className="bg-gray-300 ml-3"
          ></input>
        </label>
        <label className="block m-3">
          HorizontalAlign:
          <select
            value={horizontalAlign}
            onChange={(e: any) => setHorizontalAlign(e.target.value)}
            className="bg-gray-300 ml-3"
          >
            <option value="start">start</option>
            <option value="end">end</option>
            <option value="center">center</option>
            <option value="stretch">stretch</option>
          </select>
        </label>
        <label className="block m-3">
          VerticalAlign:
          <select
            value={verticalAlign}
            onChange={(e: any) => setVerticalAlign(e.target.value)}
            className="bg-gray-300 ml-3"
          >
            <option value="start">start</option>
            <option value="end">end</option>
            <option value="center">center</option>
            <option value="stretch">stretch</option>
          </select>
        </label>
      </div>
      <Layout
        horizontalAlign={horizontalAlign}
        verticalAlign={verticalAlign}
        horizontalSpacing={horizontalSpacing}
        verticalSpacing={verticalSpacing}
        columns={columns}
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
            default: 50, sm: 100, lg: 50, xl: 20
          </div>
        </LayoutItem>
        <LayoutItem size={{ default: 50, sm: 30, lg: 25, xl: 20 }}>
          <div className="bg-teal-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            default: 50, sm: 30, lg: 25, xl: 20
          </div>
        </LayoutItem>
        <LayoutItem size={{ sm: 30, lg: 25, xl: 20 }}>
          <div className="bg-blue-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            sm: 30, lg: 25, xl: 20
          </div>
        </LayoutItem>
        <LayoutItem size={{ sm: 40, xl: 20 }}>
          <div className="bg-indigo-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            sm: 40, xl: 20
          </div>
        </LayoutItem>
        <LayoutItem size={{ sm: 20, xl: 20 }}>
          <div className="bg-purple-500 rounded-lg shadow-xl min-h-[50px] text-center p-3">
            sm: 20, xl: 20
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
            sm: 100, md: 80
          </div>
        </LayoutItem>
        <LayoutItem size={{ sm: 100, md: 20 }}>
          <div className="border-black border-2 min-h-[50px] text-center p-3">
            sm: 100, md: 20
          </div>
        </LayoutItem>
      </Layout>
    </div>
  )
}

export default App
