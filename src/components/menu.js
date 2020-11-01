// src/components/Menu.js
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import MenuItem from "./menu-item"

/** Define MenuItem fragment and get all primary menu items */
const MENU_QUERY = graphql`
  fragment MenuItem on WpMenuItem {
    id
    label
    url
    title
    target
  }

  query GetMenuLinks {
    wp {
      generalSettings {
        url
      }
    }
    allWpMenuItem(filter: {locations: {eq: PRIMARY}}) {
      nodes {
        url
        label
      }
    }
  }
`

const Menu = () => {
  return (
    <StaticQuery
      query={MENU_QUERY}
      render={(data) => {

        if (data.allWpMenuItem) {
          const menuItems = data.allWpMenuItem.nodes.nodes
          const wordPressUrl = data.wp.generalSettings.url

       return (
         <div style={{ marginBottom: "20px" }}>
           {
             menuItems &&
             menuItems.map((menuItem) => (
               <MenuItem key={menuItem.id}
               menuItem={menuItem} wordPressUrl={wordPressUrl}/>
             )
           )}
         </div>
       )
      }
      return null
   }}
  />
  )
}

export default Menu