import React from 'react'
import './input.css'

type Props = {
    label?: string
    placeholder?: string
    type?: string 
    value?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void

}
export default function InputAuth({
  label,
    placeholder,
    type = 'text',
    value,
    onChange
}: Props

) {
  return (
    <div>
      {label && <label>{label}</label>}
      <input 
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />

    </div>
  )
}
