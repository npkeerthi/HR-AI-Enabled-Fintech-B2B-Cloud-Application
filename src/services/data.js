import axios from "axios";

export const getData = async () => {
    let response = await axios.post("http://localhost:8080/hrc/Fetch");
    let data = response.data.invoices;
    data.map((invoice, index) => ({...invoice, "id":index}));
    return data;
}