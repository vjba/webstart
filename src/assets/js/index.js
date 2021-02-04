copyRepo = () => {
    navigator.clipboard.writeText('git@github.com:vjba/webstart.git')
    let copyButton = document.getElementById('copyRepoLink')
    copyButton.innerHTML = 'done'
    copyButton.classList.add('disabled')
}
