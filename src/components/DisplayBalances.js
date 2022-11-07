import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances({ totalIncome, totalExpenses }) {
 return (
  <Segment textAlign="center">
   <Grid columns={2} divided>
    <Grid.Row>
     <Grid.Column>
      <DisplayBalance
       size="tiny"
       color="green"
       label="INCOME:"
       value={totalIncome}
      />
     </Grid.Column>
     <Grid.Column>
      <DisplayBalance
       size="tiny"
       color="red"
       label="Expenses:"
       value={totalExpenses}
      />
     </Grid.Column>
    </Grid.Row>
   </Grid>
  </Segment>
 );
}

export default DisplayBalances;
