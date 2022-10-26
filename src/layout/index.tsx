import React from 'react'

type LayoutProps = {
  horizontalAlign?: 'start' | 'end' | 'center' | 'stretch'
  verticalAlign?: 'start' | 'end' | 'center' | 'stretch'
  horizontalSpacing?: number
  verticalSpacing?: number
  columns?: number
  className?: string
  style?: object
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({
  horizontalAlign,
  verticalAlign,
  horizontalSpacing = 0,
  verticalSpacing = 0,
  columns = 12,
  className,
  style,
  children,
  ...props
}) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: horizontalAlign,
        alignContent: verticalAlign,
        ...style,
      }}
      {...props}
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          horizontalSpacing,
          verticalSpacing,
          columns,
        })
      })}
    </div>
  )
}

type Size = {
  [key: string]: number
}

type LayoutItemProps = {
  size?: Size
  horizontalSpacing?: number
  verticalSpacing?: number
  columns?: number
  className?: string
  style?: object
  children: React.ReactNode
}

export const LayoutItem: React.FC<LayoutItemProps> = ({
  size,
  horizontalSpacing = 0,
  verticalSpacing = 0,
  columns = 12,
  className,
  style,
  children,
  ...props
}) => {
  return (
    <div
      style={{
        position: 'relative',
        flex: '0 0 auto',
        width: `${size ? (size.default / columns) * 100 : 100}%`,
        paddingLeft: horizontalSpacing ? horizontalSpacing / 2 : 0,
        paddingRight: horizontalSpacing ? horizontalSpacing / 2 : 0,
        marginInline: 0,
        marginBlock: verticalSpacing / 2,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
