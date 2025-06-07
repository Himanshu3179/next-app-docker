"use client"
import React, { useEffect, useState } from 'react'

const page = () => {
  const [data, setData] = useState("")
  const fetcdata = async () => {
    const d = await (await fetch('/a.txt')).text()
    console.log(d);
    setData(d)
  }
  useEffect(() => {
    fetcdata()
  }, [])
  return (
    <div>
      <p>
        data : {data}
      </p>
    </div>
  )

}
export default page