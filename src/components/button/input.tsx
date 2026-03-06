import React from 'react'
import './input.css'

type Props = {
    label?: string
    placeholder?: string
    type?: string 
    value?: string
    name?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputAuth({
  label,
  placeholder,
  type = 'text',
  value,
  name,
  onChange
}: Props) {
  return (
    <div>
      {label && <label>{label}</label>}
      <input 
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  )
}