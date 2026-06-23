const SYNC_CONFIG = {
    useJsonBin: true,
    // ⚠️ IMPORTANTE: Substitua com seus dados reais
    // API Key (X-Master-Key) - encontrada em Account > API Keys
    jsonBinKey: '$2a$10$EpEPh3xp.yU3GEDpNhnv1ek5F.ScWjHSL876Hrx3KdE8P6rGudPQS',
    // Bin ID - está na URL: https://jsonbin.io/v3/b/[AQUI_O_BIN_ID]
    binId: '66f8b4f4ad19ca34f8b6c6b6' // Substitua pelo ID real do seu bin
};

// Exportar para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SYNC_CONFIG;
}