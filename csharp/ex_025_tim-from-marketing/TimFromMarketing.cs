using System;

static class Badge
{
    public static string Print(int? id, string name, string? department)
    {
        String _id = id == null ? "" : $"[{id}] - ";
        String _dep = department?.ToUpper() ?? "OWNER";
        return $"{_id}{name} - {_dep}";
    }
}