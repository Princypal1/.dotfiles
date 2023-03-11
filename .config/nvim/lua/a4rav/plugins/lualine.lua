local status, lualine = pcall(require, "lualine")
if not status then
	return
end

local lualine_catppuccin = require("lualine").setup({
	options = {
		theme = "catppuccin",
		-- ... the rest of your lualine config
	},
})
