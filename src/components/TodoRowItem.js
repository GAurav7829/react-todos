function TodoRowItem(props) {
  const rowNumber = props.rowNumber;
  const rowDescription = props.rowDescription;
  const rowAssigned = props.rowAssigned;
  return (
    <>
      <tr>
        <th scope="col">{rowNumber}</th>
        <td>{rowDescription}</td>
        <td>{rowAssigned}</td>
      </tr>
    </>
  );
}

export default TodoRowItem;
