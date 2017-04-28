'use strict'

module.exports = {
  groups: [
    {
      id: 1,
      name: 'Epithelial',
      tests: [
        { test: 'Pancytokeratin' },
        { test: 'OSCAR' },
        { test: 'Cytokeratin 5/6' },
        { test: 'Cytokeratin 7' },
        { test: 'Cytokeratin 20' },
        { test: 'Cytokeratin 34' },
        { test: 'EMA' },
        { test: 'E-cadherin' },
        { test: 'MOC 31' }
      ]
    },
    {
      id: 2,
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
