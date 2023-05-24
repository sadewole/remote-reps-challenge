import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

export const Button = ({
  children,
  disabled,
  onClick,
  ...rest
}: PropsWithChildren<ComponentPropsWithoutRef<'button'>>) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
      {...rest}
    >
      {children}
    </button>
  )
}

