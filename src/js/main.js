import '../css/main.css'

import './check-updates'
import { prepareForm, generateLink } from './form-util'
import { warnFacebookBrowserUserIfNecessary } from './facebook-util'
import { addVersion } from './util'
import { createForm } from './form'

warnFacebookBrowserUserIfNecessary()
createForm()
prepareForm()
addVersion(process.env.VERSION)
generateLink()