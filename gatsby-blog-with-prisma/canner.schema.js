/** @jsx builder */
import builder from 'canner-script';
import {PrismaClient} from "canner-graphql-interface";

// contruct graphQL client
const graphqlClient = new PrismaClient();

export default (
  <root graphqlClient={graphqlClient}>
    <array
      keyName="Post"
      title="Blog post"
      uiParams={{
        columns: [{
          title: "Post name",
          key: "name",
          dataIndex: "name"
        }, {
          title: "Post date",
          key: "postDate",
          dataIndex: "postDate"
        }]
      }}
      ui="tableRoute"
      >
      <string title="Post name" keyName="name"/>
      <dateTime title="Post date" keyName="postDate"/>
      <object title="Content" keyName="content" ui="editor"/>
    </array>
  </root>
)