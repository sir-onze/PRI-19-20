function apagaItem(ident){
    console.log('Vou apagar o item: ' + ident)
    axios.delete('/alunos/' + ident)
        .then(response => window.location.assign('/alunos'))
        .catch(error => console.log(error))
}

function apagaNota(idA,idN){
    axios.delete('/alunos/' + idA + '/notas/' + idN)
        .then(response => window.location.assign('/alunos/' + idA))
        .catch(error => console.log(error))
}
