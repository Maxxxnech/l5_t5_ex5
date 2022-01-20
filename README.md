# Жизненные циклы Реакт на примере новостной ленты
Для реализации обращения порядка (кнопка reverse) необходимо сравнивать текущее состояние с пропсами.
Иначе останется открытой последняя статья, бывшая первой. Это происходит потому, что статьи не инициализируются заново, а отображаются в другом порядке.
Для этого используется componentDidUpdate:

```
componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.isOpen !== this.props.defaultOpen) {
      this.setState({ isOpen: this.props.defaultOpen });
    }
  }
```
