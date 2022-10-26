import React, { useState, useEffect, useMemo } from 'react'

type LayoutProps = {
  horizontalAlign?: 'start' | 'end' | 'center' | 'stretch'
  verticalAlign?: 'start' | 'end' | 'center' | 'stretch'
  horizontalSpacing?: number
  verticalSpacing?: number
  columns?: number
  breakpoints?: object
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
  breakpoints = {},
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
          breakpoints,
          stretch: horizontalAlign === 'stretch',
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
  stretch?: boolean
  columns?: number
  breakpoints?: object
  className?: string
  style?: object
  children: React.ReactNode
}

export const LayoutItem: React.FC<LayoutItemProps> = ({
  size = {},
  horizontalSpacing = 0,
  verticalSpacing = 0,
  stretch = false,
  columns = 12,
  breakpoints = {},
  className,
  style,
  children,
  ...props
}) => {
  const mediaMatches = useMemo(
    () => getMediaMatchesFromBreakpoints(breakpoints),
    [breakpoints]
  )

  const [matches, setMatches] = useState(() => {
    const initialMatches: any = {}
    for (const breakpoint in breakpoints) {
      initialMatches[breakpoint] = mediaMatches[breakpoint].matches
    }
    return initialMatches
  })

  useEffect(() => {
    const handlers: any = {}
    for (const breakpoint in breakpoints) {
      const handler = (e: any) => {
        setMatches((matches: any) => ({
          ...matches,
          [breakpoint]: e.matches,
        }))
      }
      handlers[breakpoint] = handler
      mediaMatches[breakpoint].addListener(handlers[breakpoint])
    }
    return () => {
      for (const breakpoint in breakpoints) {
        mediaMatches[breakpoint].removeListener(handlers[breakpoint])
      }
    }
  }, [breakpoints, mediaMatches])

  let sizeToShow = size.default
  const breakpointKeys = Object.keys(breakpoints)
    .reverse()
    .sort((i, j) =>
      (breakpoints as any)[i] < (breakpoints as any)[j] ? 1 : -1
    )
  for (const breakpoint of breakpointKeys) {
    if (matches[breakpoint] && size[breakpoint]) {
      sizeToShow = size[breakpoint]
      break
    }
  }

  return (
    <div
      style={{
        position: 'relative',
        flex: `${stretch ? 1 : 0} 0 auto`,
        width: `${
          !sizeToShow ? 'inherit' : (sizeToShow / columns) * 100 + '%'
        }`,
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

function getMediaMatchesFromBreakpoints(breakpoints: any) {
  const mediaMatches: any = {}
  for (const breakpoint in breakpoints) {
    mediaMatches[breakpoint] = window.matchMedia(
      `(min-width: ${breakpoints[breakpoint]}px)`
    )
  }

  return mediaMatches
}
