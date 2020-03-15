import  React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs} from 'storybook-readme'

import AffixDemo from '../examples/affix'
import AffixReadme from '../examples/affix/readme.md'

storiesOf('导航', module)
.add('Affix', withDocs(AffixReadme, () => {
  return <AffixDemo />
}))