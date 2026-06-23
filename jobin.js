const SYNC_CONFIG = {
    useJsonBin: true,
    // ⚠️ IMPORTANTE: Substitua com seus dados reais
    // API Key (X-Master-Key) - encontrada em Account > API Keys
    jsonBinKey: '$2a$10$PpKSqwwVFrJrZF8njCvPtOIbqETvjIvkjGBYu97curmyuop7iEBle',
    // Bin ID - está na URL: https://jsonbin.io/v3/b/[AQUI_O_BIN_ID]
    binId: '6a3abba2da38895dfef2cd4d' // Substitua pelo ID real do seu bin
};

// Exportar para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SYNC_CONFIG;
}