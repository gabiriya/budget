import React from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

function EntryForm({
 description,
 value,
 isExpense,
 setDescription,
 setIsExpense,
 setValue,
}) {
 return (
  <>
   <Form.Group>
    <Form.Input
     placeholder="new thing"
     icon="tags"
     label="description"
     width={12}
     value={description}
     onChange={(e) => setDescription(e.target.value)}
    />
    <Form.Input
     width={4}
     label="value"
     placeholder="100.00"
     icon="dollar"
     iconPosition="left"
     value={value}
     onChange={(e) => setValue(e.target.value)}
    />
   </Form.Group>
   <Segment compact>
    <Checkbox
     label="is expense"
     toggle
     checked={isExpense}
     onChange={() => setIsExpense((oldState) => !oldState)}
    />
   </Segment>
  </>
 );
}

export default EntryForm;
