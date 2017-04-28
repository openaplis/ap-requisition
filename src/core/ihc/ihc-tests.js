'use strict'

module.exports = {
  groups: [
    {
      name: 'Epithelial',
      tests: [
        { name: 'Pancytokeratin' },
        { name: 'OSCAR' },
        { name: 'Cytokeratin 5/6' },
        { name: 'Cytokeratin 7' },
        { name: 'Cytokeratin 20' },
        { name: 'Cytokeratin 34' },
        { name: 'EMA' },
        { name: 'E-cadherin' },
        { name: 'MOC 31' }
      ]
    },
    {      
      name: 'Site Specific Tumor Markers',
        tests: [
          { test: 'Napsin A' },
          { test: 'Thyroglobulin' },
          { test: 'TTF-1' },
          { test: 'CA 19-9' },
          { test: 'CA 125' },
          { test: 'Calretinin' },
          { test: 'CEA' },
          { test: 'Placental Alkaline Phosphatase' },
          { test: 'RCC' },
          { test: 'Hepatocyte Specific Antigen' },
          { test: 'PAX-8' },
          { test: 'Glypican 3' },
          { test: 'GATA-3' },
          { test: 'P40' }
        ]
    }
  ]
}
