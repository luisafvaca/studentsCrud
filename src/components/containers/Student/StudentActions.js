export const EDIT_STUDENT = "EDIT_STUDENT";
export const DELET_STUDENT = "DELET_STUDENT";


export const editStudent = (id) => ({
    type: EDIT_STUDENT,
    id: id
})

export const deleteStudent = (id) => ({
    type: DELET_STUDENT,
    id: id
})