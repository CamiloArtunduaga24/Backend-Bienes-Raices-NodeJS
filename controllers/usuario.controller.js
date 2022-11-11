const formularioLogin = (req, res) => {
    res.render('auth/login', {
        pagina: 'Iniciar Sesión'
    })
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: 'Crear Cuenta'
    })
}

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-pass', {
        pagina: 'Recupera Acceso a Bienes Raices'
    })
}

export {
    formularioLogin ,
    formularioRegistro,
    formularioOlvidePassword
}