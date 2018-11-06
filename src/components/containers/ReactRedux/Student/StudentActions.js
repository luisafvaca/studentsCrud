export const EDIT_STUDENT = "EDIT_STUDENT";
export const DELET_STUDENT = "DELET_STUDENT";


export const editStudent = (dataToEdit) => ({
    type: EDIT_STUDENT,
    data: dataToEdit
})

export const deleteStudent = (id) => ({
    type: DELET_STUDENT,
    id: id
})