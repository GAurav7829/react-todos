function TodoRowItem(props) {
  const rowNumber = props.rowNumber;
  const rowDescription = props.rowDescription;
  const rowAssigned = props.rowAssigned;
  return (
    <>
      <tr>
        <th scope="row">{rowNumber}</th>
        <td>{rowDescription}</td>
        <td>{rowAssigned}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => props.deleteTodo(rowNumber)}
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    </>
  );
}

export default TodoRowItem;
