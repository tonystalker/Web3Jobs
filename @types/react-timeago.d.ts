declare module "react-timeago" {
  import * as React from "react";

  interface TimeAgoProps {
    date: string | number | Date;
    formatter?: (value: number, unit: string) => string;
  }

  export default class ReactTimeAgo extends React.Component<TimeAgoProps> {}
}
