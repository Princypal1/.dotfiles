

local status, _ = pcall(vim.cmd.colorscheme, "catppuccin")
if not status then
  print("!")
  return
end

