const stateEls = {}
const searchInput = document.querySelector('#search')

Array
    .from(document.querySelectorAll('[data-state]'))
    .forEach((el) => {
        if (el.dataset['state']) {
            stateEls[el.dataset['state']] = el;
        }
    })

searchInput.addEventListener('input', handleSearchInput)

function handleSearchInput(e) {
    const query = e
        .target
        .value
        .toLowerCase();

    Object
        .entries(stateEls)
        .forEach(([key, value]) => {
            if (key.startsWith(query)) {
                value.style.display = 'block'
            } else {
                value.style.display = 'none'
            }
        })
}