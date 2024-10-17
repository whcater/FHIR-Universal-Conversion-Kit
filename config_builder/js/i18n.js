import { createI18n } from 'vue-i18n'

const i18nResources = {
    'zh-TW': {
        title: 'F.U.C.K. 設定檔產生器',
        language: '語言',
        configSettings: '基本設定',
        configName: '設定檔名稱',
        version: '版本',
        fhirServerBaseUrl: 'FHIR 伺服器 URL',
        action: '動作',
        upload: '完成轉換後，上傳到 FHIR Server',
        return: '完成轉換後，回傳轉換資料',
        fhirVersion: 'FHIR 版本',
        validate: 'Resource 驗證',
        enableValidation: '啟用 Resource 驗證',
        disableValidation: '停用 Resource 驗證',
        fieldMappings: '欄位映射',
        addField: '添加欄位',
        generateConfig: '生成設定檔',
        generatedConfig: '生成的設定檔',
        sourceField: '來源欄位',
        targetField: '目標欄位',
        removeField: '移除',
        globalProcessors: '全域資料處理器',
        preprocessor: '全域資料預處理器',
        postprocessor: '全域資料後處理器',
        enablePreprocessor: '啟用預處理器',
        disablePreprocessor: '停用預處理器',
        enablePostprocessor: '啟用後處理器',
        disablePostprocessor: '停用後處理器',
        configNameTooltip: '設定檔的名稱，用於識別不同的設定檔，存檔後的檔名會是這個名稱',
        versionTooltip: '設定檔的版本號',
        fhirServerBaseUrlTooltip: 'FHIR 伺服器的 Base URL',
        actionTooltip: '選擇轉換後的動作：上傳到 FHIR 伺服器或回傳轉換後的資料',
        fhirVersionTooltip: '選擇要使用的 FHIR 版本',
        validateTooltip: '啟用後，會在轉換完成後驗證資料是否符合 FHIR 標準',
        globalProcessorsTooltip: '全域資料處理器允許您在轉換前後對資料進行額外的處理，您可以在下方編輯器中使用 JavaScript 語言撰寫處理邏輯。',
        fieldMappingsTooltip: '欄位映射允許您將來源資料映射到目標資料，來源欄位是您的原始欄位名稱，目標欄位是您要轉換的 FHIR 欄位名稱，以 FHIRPath 表示，例如 Patient.name。',
        configSettingsTooltip: '設定檔設定允許您配置轉換器的行為',
        generatedConfigTooltip: '以下是生成的設定檔，您可以將其存檔，搭配 F.U.C.K. 引擎進行資料轉換。',
        generateRandomName: '幫我想一個',
        downloadConfig: '下載設定檔',
        showPreprocessor: '顯示欄位預處理器',
        hidePreprocessor: '隱藏欄位預處理器',
        fieldPreprocessor: '預處理...',
        enableFieldPreprocessor: '為這個欄位啟用預處理器',
    },
    'en': {
        title: 'F.U.C.K. Config Builder',
        language: 'Language',
        configSettings: 'Config Settings',
        configName: 'Config Name',
        version: 'Version',
        fhirServerBaseUrl: 'FHIR Server Base URL',
        action: 'Action',
        upload: 'Upload',
        return: 'Return',
        fhirVersion: 'FHIR Version',
        validate: 'Resource Validation',
        enableValidation: 'Enable Resource Validation',
        disableValidation: 'Disable Resource Validation',
        fieldMappings: 'Field Mappings',
        addField: 'Add Field',
        generateConfig: 'Generate Config',
        generatedConfig: 'Generated Config',
        sourceField: 'Source Field',
        targetField: 'Target Field',
        removeField: 'Remove',
        globalProcessors: 'Global Processors',
        preprocessor: 'Global Preprocessor',
        postprocessor: 'Global Postprocessor',
        enablePreprocessor: 'Enable Preprocessor',
        disablePreprocessor: 'Disable Preprocessor',
        enablePostprocessor: 'Enable Postprocessor',
        disablePostprocessor: 'Disable Postprocessor',
        configNameTooltip: 'Name of the configuration, used to identify different configs. The file name after saving will be this name.',
        versionTooltip: 'Version number of the configuration',
        fhirServerBaseUrlTooltip: 'Base URL of the FHIR server',
        actionTooltip: 'Choose the action after conversion: upload to FHIR server or return converted data',
        fhirVersionTooltip: 'Choose the FHIR version to use',
        validateTooltip: 'When enabled, validates the data against FHIR standards after conversion',
        globalProcessorsTooltip: 'Global processors allow you to perform additional processing on the data before and after conversion',
        fieldMappingsTooltip: 'Field mappings allow you to map the source data to the target data. The source field is the original field name, the target field is the FHIR field name in FHIRPath format, e.g. Patient.name.',
        configSettingsTooltip: 'Config settings allow you to configure the behavior of the converter',
        generatedConfigTooltip: 'The following is the generated config, you can save it and use it with F.U.C.K. engine for data conversion.',
        generateRandomName: 'Generate Random Name',
        downloadConfig: 'Download Config',
        showPreprocessor: 'Show Field Preprocessor',
        hidePreprocessor: 'Hide Field Preprocessor',
        fieldPreprocessor: 'Preprocess...',
        enableFieldPreprocessor: 'Enable preprocessor for this field',
    }
}

const i18n = createI18n({
    legacy: false, // 設置為 false 以使用 Composition API 模式
    locale: 'zh-TW',
    fallbackLocale: 'en',
    messages: i18nResources
})

export default i18n
