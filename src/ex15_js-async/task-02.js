const domElements = {
  regularInput: document.querySelector('.regular-box__input'),
  regularOutput: document.querySelector('.regular-box__output'),
  debouncedInput: document.querySelector('.debounced-box__input'),
  debouncedOutput: document.querySelector('.debounced-box__output'),
};

const {
  regularInput,
  regularOutput,
  debouncedInput,
  debouncedOutput,
} = domElements;

regularInput.addEventListener('input', (e) => {
  regularOutput.textContent = e.currentTarget.value;
});

const debounceFunction = (callback, delay) => {
  let timeout;

  return () => {
    clearTimeout(timeout);

    timeout = setTimeout(callback, delay);
  };
};

const fillInDebouncedOutput = () => {
  debouncedOutput.textContent = debouncedInput.value;
};

debouncedInput.addEventListener('input', debounceFunction(fillInDebouncedOutput, 1500));
