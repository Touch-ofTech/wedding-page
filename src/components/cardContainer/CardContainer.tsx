import { PropsWithChildren } from "react"
import './CardContainer.scss'

export const CardContainer = ({children}:PropsWithChildren) => {
  return (
    <div className="card_section_container">{children}</div>
  )
}
