(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{379:function(e,t,s){"use strict";s.r(t);var a=s(43),o=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h4",{attrs:{id:"use-azure-logic-apps-and-cosmosdb-to-monitor-and-archive-twitter-hashtags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-azure-logic-apps-and-cosmosdb-to-monitor-and-archive-twitter-hashtags","aria-hidden":"true"}},[e._v("#")]),e._v(" Use Azure Logic Apps and CosmosDB to monitor and archive Twitter hashtags")]),e._v(" "),s("p",[e._v("I love data and use it constantly to improve everything in my personal life as well as my professional life. As we are about to begin the Microsoft Ignite conference, I wanted to collect tweets that use the #MSIgnite hashtag and save them to a database. I also don't want to code as I'm working on 3 sessions right now. Here's how I did it.")]),e._v(" "),s("h4",{attrs:{id:"create-an-cosmos-db-instance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-cosmos-db-instance","aria-hidden":"true"}},[e._v("#")]),e._v(" Create an Cosmos DB instance")]),e._v(" "),s("p",[e._v("Inside of the Azure Portal, create a Cosmos DB instance.")]),e._v(" "),s("p",[e._v("For Cosmos DB :")]),e._v(" "),s("ul",[s("li",[e._v("Use "),s("strong",[e._v("SQL")]),e._v(" for the API")]),e._v(" "),s("li",[e._v("For Database ID use "),s("strong",[e._v("cosmosdb-ignite")])]),e._v(" "),s("li",[e._v("For Collection ID use "),s("strong",[e._v("items")])]),e._v(" "),s("li",[e._v("Throughput use "),s("strong",[e._v("400")])])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azlogiccosmos1.png")}}),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azlogiccosmos3.png")}}),e._v(" "),s("h4",{attrs:{id:"create-an-logic-app-instance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-logic-app-instance","aria-hidden":"true"}},[e._v("#")]),e._v(" Create an Logic App instance")]),e._v(" "),s("p",[e._v("Inside of the Azure Portal, create a Logic App instance per the screenshot below")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azlogiccosmos2.png")}}),e._v(" "),s("h4",{attrs:{id:"logic-app-designer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logic-app-designer","aria-hidden":"true"}},[e._v("#")]),e._v(" Logic App Designer")]),e._v(" "),s("p",[e._v("Open the Logic App that you just created and select "),s("strong",[e._v("When a new tweet is posted")]),e._v(" and log in with your Twitter credentials and select the interval and text you wish to search for. In my case I'm using #MSIgnite.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azlogiccosmos4.png")}}),e._v(" "),s("p",[e._v("Choose an action that is "),s("strong",[e._v("Create or update document")])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azlogiccosmos5.png")}}),e._v(" "),s("p",[e._v("Provide the Connection Name (anything you want) and the account you wish to use.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azlogiccosmos6.png")}}),e._v(" "),s("p",[e._v("Fill out the following fields:")]),e._v(" "),s("ul",[s("li",[e._v("For Database ID use "),s("strong",[e._v("cosmosdb-ignite")])]),e._v(" "),s("li",[e._v("For Collection ID use "),s("strong",[e._v("items")])]),e._v(" "),s("li",[e._v("For Document use:")])]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n  "created": @{triggerBody()?[\'CreatedAtIso\']},\n  "id": @{triggerBody()?[\'TweetId\']},\n  "text": @{triggerBody()?[\'TweetText\']},\n  "user": "@{triggerBody()?[\'TweetedBy\']}"\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("Please note that these are dynamic fields, so you might not be able to copy and paste that text.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azlogiccosmos7.png")}}),e._v(" "),s("p",[e._v("Click Save and then go into your Cosmos DB Instance and you can query the database to see the data coming in.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/azlogiccosmos8.png")}})])},[],!1,null,null,null);t.default=o.exports}}]);