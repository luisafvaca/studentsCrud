import students from "../../../../mocks/students";

export function fetchData() {
    return Promise.resolve(students);
}